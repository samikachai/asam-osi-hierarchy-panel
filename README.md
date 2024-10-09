# asam-osi-hierarchy-panel

This is a custom extension for Lichtblick that enables to add a panel showing the Ground Truth Hierarchy data in a tree view.

## Develop

Extension development uses the `npm` package manager to install development dependencies and run build scripts.

To install extension dependencies, run `npm` from the root of the extension package.

```sh
npm install
```

To build and install the extension into your local Foxglove desktop app, run:

```sh
npm run local-install
```

Open the Foxglove desktop (or `ctrl-R` to refresh if it is already open). Your extension is installed and available within the app.

## Package

Extensions are packaged into `.foxe` files. These files contain the metadata (package.json) and the build code for the extension.


```sh
npm run package
```

This command will package the extension into a `.foxe` file in the local directory.
