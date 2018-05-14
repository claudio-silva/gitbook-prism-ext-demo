# prism-plugin-ext demo

This is a GitBook book that demonstrates how to configure and use the [gitbook-plugin-prism-ext](https://github.com/claudio-silva/gitbook-plugin-prism-ext) plugin effectively.

## Introduction

Out-of-the-box, the `prism-ext` plugin will not work as expected, due to the default CSS styles of GitBook books.  
Some custom styles are needed to make it work correctly and this demo book, not only provides those styles, but it also demonstrates how to setup your book's [book.json](https://github.com/claudio-silva/gitbook-prism-ext-demo/blob/master/book.json) and provides some examples of the plugin being used to highlight a few code blocks, using different Prism plugins.

## Installation

First, make sure you have [GitBook's command line interface](https://github.com/GitbookIO/gitbook-cli) installed.

Clone this repository to a directory on your machine and then, using your terminal, run:

```bash
cd the-prism-plugin-ext-demo-directory
gitbook install
gitbook serve
```

Now you can view the book on your browser at [http://localhost:4000](http://localhost:4000).

The same page you're reading right now should appear, with the difference that the highlighting examples below will be properly highlighted.

## Configuration

Please study this project's [book.json](https://github.com/claudio-silva/gitbook-prism-ext-demo/blob/master/book.json) file, which contains a valid demo configuration, and the source of this [README.md](https://github.com/claudio-silva/gitbook-prism-ext-demo/blob/master/README.md) document.

Feel free to use the `custom.js` and `custom.css` files on your own books, or just parts of them.

The `custom.js` Prism plugin is a demo of how to create your own plugins that you may include on your books. This specific plugin demo just suppresses line numbers when the code block has a single line.

The `custom.css` file demonstrates how to include your own stylesheets on your books, using the `prism-ext` plugin. **You will usually need some of the styles it provides for the plugin to work properly on your books.**

### Applying `line-numbers` to all blocks

If you want to apply the `line-numbers` class to all code blocks on your book, without having to use the `{.line-numbers}` syntax on each block, you should set the following option on `book.json`:

```json
{
  "pluginsConfig": {
    "prism": {
      "cssClasses": "line-numbers"
    }
  }
}
```

## Syntax highlighting examples, using Prism

> **Note:** you should see the following examples on `http://localhost:4000` using the `gitbook serve` command.

##### Some PHP code with the `line-numbers` plugin

```php{.line-numbers}
use Matisse\Components\Base\Component;

class HelloWorld extends Component
{
  protected function render ()
  {
    echo "Hello World!";
  }
}
```

This code block begins with the following syntax, which applies the `line-numbers` CSS class to the block, thereby enabling the display of line numbers on it:

    ```php{.line-numbers}

The following options on `book.json` should be set:

```json
{
  "pluginsConfig": {
    "prism": {
      "codeBlockExtSyntax": true
    }
  }
}
```

##### Example with both the `line-numbers` and the `line-highlight` plugins

```html{.line-numbers data-line="2,4-5,10"}
<h1>Some HTML text</h1>
<HelloWorld/>
<form>
  <Input name=field1 value={myVar}/>
  <For each=record of={data}>
    <Header><ul></Header>
    <li>Item {record.name}</li>
    <Footer></ul></Footer>
    <Else>There are no items.</Else>
  </For>
</form>
```

This code block should be defined with the following line:

    ```html{data-line="2,4-5,10"}

The following options on `book.json` should be set:

```json
{
  "pluginsConfig": {
    "prism": {
      "codeBlockExtSyntax": true,
      "cssClasses": "line-numbers",
      "lineHeight": 20
    }
  }
}
```

## License

You can use this book template freely, for any purpose, with no copyright or legal restrictions of any kind.

The complete license can be read at [unlicense.org](http://unlicense.org/).
