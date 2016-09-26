# tachyons-css-generator
an SCSS mixin to generate tachyons and compile them with autoprefixer

## How to use

```javascript
git clone https://github.com/philipyoungg/tachyons-css-generator.git

npm i

// now you can add your new tachyons class in src/style.scss


// to compile the generated class
npm start
```

## API
```javascript

//example
@include genTachyons( 'mb0', 'margin-bottom', 0);

// compiles to
.mb0 {
  margin-shrink: 0;
}

@media screen and (min-width: 30em) {
  .mb0-ns {
    margin-shrink: 0;
  }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
  .mb0-m {
    margin-shrink: 0;
  }
}
@media screen and (min-width: 60em) {
  .mb0-l {
    margin-shrink: 0;
  }
}

//you can also generate two parameter tachyons class
@include genTachyons2param( 'absolute-vertical-center', 'top', '50%', 'transform', 'translateX(-50%)');

//compiles to
.absolute-vertical-center {
  top: 50%;
  transform: translateX(-50%);
}

@media screen and (min-width: 30em) {
  .absolute-vertical-center-ns {
    top: 50%;
    transform: translateX(-50%);
  }
}
@media screen and (min-width: 30em) and (max-width: 60em) {
  .absolute-vertical-center-m {
    top: 50%;
    transform: translateX(-50%);
  }
}
@media screen and (min-width: 60em) {
  .absolute-vertical-center-l {
    top: 50%;
    transform: translateX(-50%);
  }
}
```

## List of API
```javascript
// for one parameter
@include genTachyons( className, properties, value)

// for two parameter
@include genTachyons2param( className, properties, value, properties2, value2)

// for three parameter
@include genTachyons3param( className, properties, value, properties2, value2, properties3, value3)
```

## License
```javascript
MIT
```
