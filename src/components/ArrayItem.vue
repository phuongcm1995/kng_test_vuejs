<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">

        <div class="card-header bg-white m-3 mb-0 p-0">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Enter name.." aria-label="Recipient's username"
                   aria-describedby="button-addon2" v-model="name">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="addItem">Add</button>
          </div>
        </div>

        <div class="card-body text-start">

          <ul class="list-group list-group-flush" v-if="items.length > 0">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item,index) in items"
                v-bind:key="index">
              <span>{{ item.name }}</span>
              <div>
                <button type="button" class="btn btn-success me-1" v-bind:disabled="index===0"
                        @click="changePos(index,index-1)">Up
                </button>
                <button type="button" class="btn btn-success me-1" v-bind:disabled="index === items.length - 1"
                        @click="changePos(index,index+1)">Down
                </button>
                <button type="button" class="btn btn-danger" @click="removeItem(index)">Delete</button>
              </div>
            </li>
          </ul>

          <span class="card-text" v-else>Empty item</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrayItem',
  data() {
    return {
      name: "",
      items: []
    }
  },
  methods: {
    addItem: function () {
      if (this.name === "") {
        alert("Dữ liệu không được rỗng.");
        return false;
      }
      this.items.push({name: this.name});
      this.name = "";
    },
    removeItem: function (index) {
      this.items.splice(index, 1)
    },
    changePos: function (from, to) {
      this.items.move(from, to);
    },
  }
}
</script>
