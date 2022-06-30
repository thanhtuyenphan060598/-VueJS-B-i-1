var app = new Vue({
  el: "#app",
  data: {
    isAuto: true,
    isMissing: false,
    isSubmit: {
      isName: false,
      isId: false,
    },
    manualFields: {
      manualInputName: null,
      manualInputId: null,
    },
    businessAccount: null,
    listBusinessAccount: [
      {
        id: 255697,
        name: "Account 1",
      },
      {
        id: 582235,
        name: "Account 2",
      },
      {
        id: 9789564,
        name: "Account 3",
      },
      {
        id: 524756,
        name: "Account 4",
      },
    ],
    listPixelAccount: [
      {
        id: 1,
        parentId: 255697,
        name: "Pixel 1",
      },
      {
        id: 2,
        parentId: 582235,
        name: "Pixel 2",
      },
      {
        id: 3,
        parentId: 582235,
        name: "Pixel 3",
      },
      {
        id: 4,
        parentId: 255697,
        name: "Pixel 4",
      },
      {
        id: 5,
        parentId: 9789564,
        name: "Pixel 5",
      },
      {
        id: 6,
        parentId: 255697,
        name: "Pixel 6",
      },
      {
        id: 7,
        parentId: 582235,
        name: "Pixel 7",
      },
      {
        id: 8,
        parentId: 9789564,
        name: "Pixel 8",
      },
      {
        id: 9,
        parentId: 255697,
        name: "Pixel 9",
      },
      {
        id: 10,
        parentId: 582235,
        name: "Pixel 10",
      },
      {
        id: 11,
        parentId: 9789564,
        name: "Pixel 11",
      },
      {
        id: 12,
        parentId: 255697,
        name: "Pixel 12",
      },
    ],
  },
  computed: {
    listFiltersPixel() {
      return this.listPixelAccount.filter(
        (item) => item.parentId === parseInt(this.businessAccount)
      );
    },
  },
  methods: {
    //Remove all fields
    handleCancel() {
      this.businessAccount = null;

      this.manualFields.manualInputName = null;
      this.manualFields.manualInputId = null;
    },
    //feedback input fields manual pixel
    handleInputFeedback(elementInput, elementMessage, toggle, statusDisplay) {
      if (typeof toggle !== "string" || typeof statusDisplay !== "string")
        return;
      toggle === "add"
        ? elementInput.classList.add("invalid--feedback")
        : elementInput.classList.remove("invalid--feedback");

      elementMessage.style.display = statusDisplay;
    },

    // handle input validate feedback
    handleValidate() {
      if (
        /[0-9$&+,:;=?@#|'<>.^*()%!-]/.test(this.manualFields.manualInputName) ||
        this.manualFields.manualInputName === null
      ) {
        this.handleInputFeedback(
          this.$refs.inputName,
          this.$refs.inputNameFeedback,
          "add",
          "block"
        );
        this.isSubmit.isName = false;
      } else {
        this.handleInputFeedback(
          this.$refs.inputName,
          this.$refs.inputNameFeedback,
          "remove",
          "none"
        );
        this.isSubmit.isName = true;
      }
      if (
        /[^0-9]/.test(this.manualFields.manualInputId) ||
        this.manualFields.manualInputId === null
      ) {
        this.handleInputFeedback(
          this.$refs.inputId,
          this.$refs.inputIdFeedback,
          "add",
          "block"
        );
        this.isSubmit.isId = false;
      } else {
        this.handleInputFeedback(
          this.$refs.inputId,
          this.$refs.inputIdFeedback,
          "remove",
          "none"
        );
        this.isSubmit.isId = true;
      }
    },

    //submit form if validate not errors
    handlesubmit() {
      this.handleValidate();
      if (this.isSubmit.isName && this.isSubmit.isId) {
        this.manualFields.manualInputName = null;
        this.manualFields.manualInputId = null;
        alert("Submit Success !");
      }
    },
  },
});
