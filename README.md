# :scissors: Vue String Filter

> Vue 2.x lightweight string manipulation filter

[![License](https://img.shields.io/github/license/mazipan/vue-string-filter.svg?maxAge=3600)](https://github.com/mazipan/vue-string-filter) [![GitHub Star](https://img.shields.io/github/stars/mazipan/vue-string-filter.svg?maxAge=3600)](https://github.com/mazipan/vue-string-filter/stargazers) [![version](https://img.shields.io/npm/v/vue-string-filter.svg)](https://www.npmjs.com/package/vue-string-filter) [![downloads](https://img.shields.io/npm/dt/vue-string-filter.svg)](https://www.npmjs.com/package/vue-string-filter) [![Travis](https://img.shields.io/travis/mazipan/vue-string-filter.svg)](https://travis-ci.org/mazipan/vue-string-filter) [![codecov](https://codecov.io/gh/mazipan/vue-string-filter/branch/master/graph/badge.svg)](https://codecov.io/gh/mazipan/vue-string-filter)


## Demo

[https://mazipan.github.io/vue-string-filter/](https://mazipan.github.io/vue-string-filter/)


## Available Filter

+ `uppercase`
+ `lowercase`
+ `capitalize`
+ `titlecase`
+ `slug`
+ `truncate`
+ `cut`

## Download

```bash
# NPM
npm install vue-string-filter

# Yarn
yarn add vue-string-filter
```

## Sample Usage

#### Use Plugins :

```javascript
import VueStringFilter from 'vue-string-filter'
Vue.use(VueStringFilter)
```

#### Use in View :

```html
<span>{{ stringWillFormatted | uppercase }}</span>
<span>{{ stringWillFormatted | lowercase }}</span>
<span>{{ stringWillFormatted | capitalize }}</span>
<span>{{ stringWillFormatted | titlecase }}</span>
<span>{{ stringWillFormatted | slug }}</span>
<span>{{ stringWillFormatted | truncate(10) }}</span>
<span>{{ stringWillFormatted | cut(10) }}</span>
```

## Contributing

If you'd like to contribute, head to the [contributing guidelines](/CONTRIBUTING.md). Inside you'll find directions for opening issues, coding standards, and notes on development.

### Hope this will be useful for you all.

Contact Me :

[![Email](https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600)](mailto:mazipanneh@gmail.com) 
[![Website](https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600)](https://mazipanneh.com/blog/)
[![Facebook](https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600)](https://facebook.com/mazipanneh) 

[![Twitter](https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600)](https://twitter.com/Maz_Ipan) 
[![Linkedin](https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600)](https://id.linkedin.com/in/irfanmaulanamazipan) 
[![Slideshare](https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600)](https://www.slideshare.net/IrfanMaulana21) 
