import React, { useEffect } from "react"
import { globalHistory } from "@reach/router"

export function CustomerChat() {
  return (
    <>
      {useEffect(() => {
        window.fbAsyncInit = function () {
          window.FB.init({
            xfbml: true,
            version: "v5.0",
          })
        }
        ;(function (d, s, id) {
          var js,
            fjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) return
          js = d.createElement(s)
          js.id = id
          js.src =
            "https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js"
          fjs.parentNode.insertBefore(js, fjs)
        })(document, "script", "facebook-jssdk")
      })}
      <div id="fb-root" />
      <div
        class="fb-customerchat"
        attribution="setup_tool"
        page_id="106572004521097"
        theme_color="#FF6E40"
        logged_in_greeting="Bienvenido !  Como podríamos ayudarle?"
        logged_out_greeting="Bienvenido !  Como podríamos ayudarle?"
      ></div>
    </>
  )
}
