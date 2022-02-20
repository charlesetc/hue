(ns ^:figwheel-no-load hue.dev
  (:require [hue.core :as core]
            [figwheel.client :as figwheel :include-macros true]))

(enable-console-print!)

(core/init!)
