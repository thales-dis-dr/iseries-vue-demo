<template>
  <body class="not-supported non-boxless">
    <div class="wrapper">
      <img class="status-page-image" src="/img/passport_2.jpg" />

      <h1 class="not-supported-page-title">
        Oh snap! We don't support this version of your browser,
        <em>lets find one that is compatible!</em>
      </h1>

      <p class="not-supported-intro">
        You are visiting this page because we detected an unsupported browser.
        We built our iSeries Reader Demo Application using
        <a href="https://webassembly.org/">Web Assembly</a> which allows for
        secure connectivity to our Document Readers, increases the speed of
        encryption, and gives you a better experience with new features and
        functionalities. Unfortunately, your browser does not support this
        technology. Please try again with an installed
        <a href="https://webassembly.org/roadmap/"
          >Web Assembly Supported Browser.</a
        >

        If you believe you have arrived here in error, please
        <a href="mailto:technical.service@thalesgroup.com">contact us</a>. Be
        sure to include your browser version.
      </p>

      <div class="browsers-container">
        <h2 class="supported-intro">These are the ones we recommend:</h2>

        <ul class="supported-browsers-list">
          <li class="supported-browsers-list-item browser-chrome">
            <div class="supported-browser-information">
              Google Chrome
            </div>
            <div class="supported-browser-download">
              <a
                href="https://www.google.com/chrome/"
                target="_blank"
                rel="noopener"
              >
                Download latest
              </a>
            </div>
            <div class="clearfix"></div>
          </li>
          <li class="supported-browsers-list-item browser-firefox">
            <div class="supported-browser-information">
              Mozilla Firefox
            </div>
            <div class="supported-browser-download">
              <a
                href="https://www.mozilla.org/firefox/"
                target="_blank"
                rel="noopener"
              >
                Download latest
              </a>
            </div>
            <div class="clearfix"></div>
          </li>

          <li class="supported-browsers-list-item browser-edge">
            <div class="supported-browser-information">
              Microsoft Edge
            </div>
            <div class="supported-browser-download">
              <a
                href="https://www.microsoft.com/edge"
                target="_blank"
                rel="noopener"
              >
                Download latest
              </a>
            </div>
            <div class="clearfix"></div>
          </li>

          <li class="supported-browsers-list-item browser-safari">
            <div class="supported-browser-information">
              Apple Safari
            </div>
            <div class="supported-browser-download">
              <a
                href="https://www.apple.com/macos/how-to-upgrade/"
                target="_blank"
                rel="noopener"
              >
                Upgrade your OS
              </a>
            </div>
            <div class="clearfix"></div>
          </li>
        </ul>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "unsupported"
};
</script>

<style scoped>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

.topbar {
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #c5c5c5;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  padding: 0 15px;
}

.topbar-logo {
  line-height: 59px;
}

.topbar-logo > img {
  vertical-align: middle;
}

body {
  background: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 13px;
  line-height: 21px;
}

.narrow-wrapper {
  max-width: 440px;
  padding: 30px 20px;
  margin: 0 auto;
  text-align: center;
}

.narrow-container {
  background: #fff;
  color: #000;
  border-radius: 4px;
  border: 1px solid #c5c5c5;
  padding: 20px;
  margin-bottom: 40px;
  overflow-wrap: break-word;
}

.wrapper {
  max-width: 700px;
  padding: 30px 20px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  margin-bottom: 15px;
}

h2 {
  font-size: 18px;
  line-height: 36px;
  font-weight: 600;
  margin-bottom: 15px;
}

p {
  margin-bottom: 15px;
}

a.button {
  background-color: #72bc42;
  text-shadow: 0 1px 0 #5e9b36;
  border-color: #4a7a2b;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  padding: 5px 14px;
  display: inline-block;
  font-size: 13px;
  text-align: center;
  line-height: 1.4;
  border: 1px solid #999;
  border-bottom-width: 2px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
}

a.button:hover {
  color: #fff;
  background-color: #6db43f;
  text-decoration: none;
}

.status-page-image {
  border-radius: 400px;
  background: #fff;
  border: 1px solid #c5c5c5;
  padding: 3px;
  width: 215px;
  height: 215px;
  margin-bottom: 15px;
}

.supported-browsers-list {
  background: #fff;
  border: 1px solid #c5c5c5;
  margin-top: 30px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}

.supported-browsers-list-item {
  padding: 30px 30px 30px 85px;
  border-bottom: 1px solid #dcdcdc;
}

.browser-chrome {
  background: url(/assets/browser-icons/chrome-icon.png) no-repeat 30px 50%;
}

.browser-firefox {
  background: url(/assets/browser-icons/firefox-icon.png) no-repeat 30px 50%;
}

.browser-edge {
  background: url(/assets/browser-icons/edge-icon.jpg) no-repeat 30px 50%;
}

.browser-safari {
  background: url(/assets/browser-icons/safari-icon.png) no-repeat 30px 50%;
}

@media (min-width: 500px) {
  .supported-browser-download {
    text-align: right;
    float: right;
  }

  .supported-browser-information {
    float: left;
  }
}

.supported-browser-information {
  font-weight: 600;
  font-size: 15px;
}

a {
  color: #216ba5;
  text-decoration: none;
}

a:hover {
  color: #144063;
  text-decoration: underline;
}

.clearfix {
  clear: both;
}

em {
  font-style: italic;
}

.no-margin {
  margin: 0 !important;
}
</style>
