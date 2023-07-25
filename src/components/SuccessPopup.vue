<template>
  <div v-if="showPopup" class="success-popup">
    <p>Character created successfully!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    showSuccessPopup() {
      this.showPopup = true;
      setTimeout(() => {
        this.closePopup();
      }, 3000); // 3秒后自动关闭弹窗
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<style>
.success-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-popup p {
  margin: 0;
}
</style>
