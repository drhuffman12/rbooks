// hideTarget.controller
import { Controller } from "stimulus"
import Rails from '@rails/ujs';


export default class extends Controller {
  static targets = ['entry_id','reconcile']
  connect() {
    console.log('Hello checking')
  }

  clearSplits() {
    console.log("clear click")
    var reconcile = event.currentTarget
    var entryid =reconcile.nextElementSibling
    console.log(entryid.value)

    Rails.ajax({
      url: "/reports/clear_splits.js",
      type: "patch",
      data: "entry_id="+entryid.value,
      success: function(data) {
        console.log('data');
      }
    })

  }

  unclearSplits(){
    console.log("unclear click")
    var reconcile = event.currentTarget
    var entryid =reconcile.nextElementSibling
    console.log(entryid.value)

    Rails.ajax({
      url: "/reports/unclear_splits.js",
      type: "patch",
      data: "entry_id="+entryid.value,

      success: function(data) {
        console.log('data');
      }
    })

  }

}