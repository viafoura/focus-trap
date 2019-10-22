```html
<button v-dialog:toggle="form-modal">Open A11Y Dialog</button>
<my-dialog
  class="form-dialog"
  @closed="active = false"
  @opened="active = true"
  ref="form-modal"
  aria-labelledby="modal-title"
>
  <focus-trap
    class="form-dialog__content"
    :active="active"
    :deactivate-on-outside-click="true"
  >
    <h1 id="modal-title">Modal title</h1>
    <form @submit.prevent="onSubmit">
      <label>Name: <input required type="text" placeholder="Give me your name"></label>
      <label>Email:<input required type="email" placeholder="Give me your email"></label>
      <button type="submit" name="button">Submit</button>
    </form>
  </focus-trap>
</my-dialog>
```

```js
export default {
  data () {
    return {
      active: false
    }
  },
  methods: {
    onSubmit () {
      this.$wv.dialog.toggle('form')
    }
  }
}
```
