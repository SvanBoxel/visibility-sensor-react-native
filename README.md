# React Native visibility sensor component
React Native component that helps with determining whether a component is visible to the user.

Inspired by [react-native-inviewport](https://github.com/yamill/react-native-inviewport) and [react-visibility-sensor](https://github.com/joshwnj/react-visibility-sensor).

All usable with Expo with no extra native dependencies!

<img src="https://user-images.githubusercontent.com/24505883/86367545-608c5e80-bc7c-11ea-89b0-76699e84d785.gif" width="300" />   | <img src="https://user-images.githubusercontent.com/24505883/86367431-3aff5500-bc7c-11ea-90ca-7c8f1ef9dfe6.gif" width="280" />
:---------------:|:----------------:|
| 🐶 visible vertical? |  🐶 visible horizontal?   |

## Installation

Open a Terminal in the project root and run:

```sh
npm install npm visibility-sensor-react-native
```

or if you use `yarn`:

```sh
yarn add visibility-sensor-react-native
```

## Usage

```javascript
import VisibilitySensor from 'visibility-sensor-react-native'

const Example = props => {
  const handleImageVisibility = visible = {
    // handle visibility change
  }

  render() {
    return (
      <View style={styles.container}>
        <VisibilitySensor onChange={handleImageVisibility}>
          <Image
            style={styles.image}
            source={require("../assets/placeholder.png")}
           />
         </VisibilitySensor>
    </View>
   )
  }
}
```

## Todo

It's not finished and some work has to be done yet.

- Handle offsets. Callback if triggered is 1px is in viewport now. 
- Add correct Typescript types
- Add tests


## Contributing

If you have suggestions for how this component could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License
[ISC](LICENSE) © 2020 Sebass van Boxel <hello@svboxel.com>
