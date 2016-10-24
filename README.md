# preload-image-loader
A loader to preload images.


## Example
```javascript
{
  module: {
    loaders: [
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
              'preload-image', // add preload-image-loader here
              'file'
            ]
          },
    ]
  }
}
```

## Credits
This loader was initially written by Tobias Koppler (@sokra), author of Webpack.
Fixed by Cole Turner (@colepatrickturner).
