const React = require("react")

const HeadComponents = [
 <script
   key="1-http-ads"
   data-ad-client="ca-pub-7772000262033925"
   async
   crossorigin="anonymous"
   src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7772000262033925"
   />,
]

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
}
