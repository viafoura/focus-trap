<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import createFocusTrap from 'focus-trap'

  export default {
    props: {
      active: {
        type: Boolean,
        default: true
      },
      paused: {
        type: Boolean,
        default: false
      },
      initialFocus: {
        default: null
      },
      deactivateOnEsc: {
        type: Boolean,
        default: true
      },
      deactivateOnOutsideClick: {
        type: Boolean,
        default: false
      },
      returnFocusOnDeactivate: {
        type: Boolean,
        default: true
      },
      allowOutsideClick: {
        type: Function,
        default: null
      }
    },
    data () {
      return {
        focusTrap: null
      }
    },
    mounted () {
      this.initFocusTrap()
    },
    beforeDestroy () {
      this.focusTrap.deactivate()
    },
    methods: {
      initFocusTrap () {
        this.setFocusTrap()

        if (this.active) {
          this.focusTrap.activate()
        }
        if (this.paused) {
          this.focusTrap.pause()
        }
      },
      setFocusTrap () {
        this.$set(this, 'focusTrap', createFocusTrap(this.$el, {
          onActivate: this.onActivate,
          onDeactivate: this.onDeactivate,
          initialFocus: this.initialFocus,
          escapeDeactivates: this.deactivateOnEsc,
          clickOutsideDeactivates: this.deactivateOnOutsideClick,
          returnFocusOnDeactivate: this.returnFocusOnDeactivate,
          allowOutsideClick: this.allowOutsideClick
        }))
      },
      onActivate () {
        this.$emit('activated')
      },
      onDeactivate () {
        this.$emit('deactivated')
      }
    },
    watch: {
      active (val, oldVal) {
        if (oldVal && !val) {
          this.focusTrap.deactivate()
        } else if (!oldVal && val) {
          this.focusTrap.activate()
        }
      },
      paused (val, oldVal) {
        if (oldVal && !val) {
          this.focusTrap.unpause()
        } else if (!oldVal && val) {
          this.focusTrap.pause()
        }
      }
    }
  }
</script>
