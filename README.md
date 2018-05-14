# prism-plugin-ext demo

##### Some PHP code with the `line-numbers` plugin

```php
use Matisse\Components\Base\Component;

class HelloWorld extends Component
{
  protected function render ()
  {
    echo "Hello World!";
  }
}
```

##### Example with both the `line-numbers` and the `line-highlight` plugins

```html{data-line="2,4-5,10"}
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
