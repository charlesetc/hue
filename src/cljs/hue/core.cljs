(ns hue.core
    (:require [reagent.core :as r :refer [atom]]
              [reagent.session :as session]
              [goog.string]
              [goog.string.format]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]))

;; -------------------------
;; State

(def first-hue (r/atom (/ (Math/round (* (rand) 10000)) 10000)))
(def saturation (r/atom 0.4))
(def value (r/atom 1))
(def n (r/atom (+ 4 (rand-int 4))))


;; -------------------------
;; Helper functions

(defn hsvtorgb [color]
  (let [[hue s v] color
        i (Math/floor (* hue 6))
        f (- (* hue 6) i)
        p (* v (- 1 s))
        q (* v (- 1 (* f s)))
        t (* v (- 1 (* (- 1 f) s)))
        [r g b] (case (mod i 6)
                  0 [v t p]
                  1 [q t p]
                  2 [p v t]
                  3 [p q v]
                  4 [t p v]
                  5 [v p q])]
    [(* 255 r)
     (* 255 g)
     (* 255 b)]))


(defn rgba [color a] (let [color (map (fn [x] (goog.string.format "%.2f" x)) color)
                           [r g b] color
                           ]
                       (if (= a 1)
                         (str "rgb(" r ", " g ", " b ")")
                         (str "rgba(" r ", " g ", " b ", " a ")"))))

(defn allcolors [hue saturation value alpha number]
  (let [hue (mod (* hue 1.61803398875) 1)]
    (if (= number 0)
      (list)
      (cons
       (rgba (hsvtorgb [hue saturation value]) alpha)
       (allcolors hue saturation value alpha (- number 1))))))

(def templates
  ["inset 0 30px 0 "
   "inset 30px 0 0 "
   "inset 0 -30px 0 "
   "inset -30px 0 0 "])

(defn shadow [colors]
  (str (apply str (interpose ", " (map str templates colors)))))

(defn generate-shadow [f]
  (let [thecolors (allcolors @first-hue @saturation @value 0.6 @n)
        shadows (shadow (f thecolors))]
    (println shadows)
    shadows)
  )

;; -------------------------
;; Components

(defn slider [title a bottom top step]
  (let [set-atom (fn [e] (swap! a (fn [x] (.-target.value e))))]
    [:div.slider
     [:h3 title]
     [:input {:type :range
              :class :dial
              :value @a
              :max top
              :min bottom
              :step step
              :on-change set-atom }]
     [:span @a]
     ]))

(defn box [color]
  [:li {:class :box
        :style {:background-color color
                :width (str (/ 100 @n) "%")
                :font-size (str (+ 5 (/ 20 @n)) "pt")
                }}
   color
   ])

(defn boxes [hue saturation value]
  (let [colors (allcolors hue saturation value 1 @n)]
    (map (fn [x] [box x]) colors)))

;; -------------------------
;; Views

(defn home-page []
  [:div
   [:h1#title "Hue"]
   [:div#ring1 {:style {:box-shadow (generate-shadow identity)}}]
   [:div#ring2 {:style {:box-shadow (generate-shadow reverse)}}]
   [:ul#sliders 
     [slider :hue first-hue 0 1 0.0001]
     [slider :saturation saturation 0 1 0.0001]
     [slider :value value 0 1 0.0001]
     [slider :number n 1 8 1]]

   [:ul#boxes (boxes @first-hue @saturation @value)]
   ]
  )

; (defn about-page []
;   [:div [:h2 "About hue"]
;    [:div [:a {:href "/"} "go to the home page"]]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

; (secretary/defroute "/about" []
;   (session/put! :current-page #'about-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
