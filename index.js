(function() {
  var cc = {
    user: {
      name: null,
      role: null,
      gRole: null,
      useGRole: false,
      sub: 0
    },
    
    getUser: function(id) {
      cc.user.name = API.getUser(id).username;
      cc.user.role = API.getUser(id).role;
      cc.user.gRole = API.getUser(id).gRole;
      if (gRole > 0) {
        cc.user.useGRole = true;
      }
      cc.user.sub = API.getUser(id).sub;
    },
    
    start: function() {
      API.on(API.CHAT,cc.chatCheck);
      
      API.sendChat("CustomChat has started. Made by: Grant Sommer (GrantSommer.com) (GitHub.com/thegreat1200)");
    },
    
    end: function() {
      API.off();
      
      API.sendChat("CustomChat has shutdown.");
    },
    
    chatCheck: function(data) {
      
      cc.getUser(data.uid);
    }
  };
}).call(this);
