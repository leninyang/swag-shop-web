export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";

var observers = {};
let instance = null;

class NotificationService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  postNotification = (notifName, data) => {
    let obs = observers[notifName];
    for (var x = 0; x < obs.length; x++) {
      var obj = obs[x];
      obj.callBack(data);
    }
  }

  removeObserver = (observer, notifName) => {
    var obs = observers[notifName];

    if (obs) {
      for (var x = 0; x < obs.length; x++) {
        // If it's the same as the one in memory, remove it
        if (observer === obs[x].observer) {
          obs.splice(x, 1);
          // Reset array to new array with item taken out
          observers[notifName] = obs;
          break;
        }
      }
    }
  }

      // Type of call/notification to listen for
            // Component that wants to listen
                  // Function passed to be called
  addOberserver = (notifName, observer, callBack) => {
    let obs = observers[notifName];

    if (!obs) {
      observers[notifName] = [];
    }

    let obj = {observer: observer, callBack: callBack};
    observers[notifName].push(obj);
  }
}

export default NotificationService;
