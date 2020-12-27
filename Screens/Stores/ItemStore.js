import { action, observable } from "mobx";
import axios from "axios";
class ItemStore {
  @observable items = [];

  @action setItems() {
    axios
      .get("https://5bcce576cf2e850013874767.mockapi.io/task/categories")
      .then((res) => {
        this.items = res.data;
      });
  }
}
const Store = new ItemStore();
export default Store;
