(ns figwheel.connect.build-app (:require [hue.core] [figwheel.client] [figwheel.client.utils] [hue.dev]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/hue.core.mount-root (apply js/hue.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'hue.core/mount-root' is missing"))), :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

