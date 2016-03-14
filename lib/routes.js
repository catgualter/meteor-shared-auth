FlowRouter.route("/shared-auth-frame", {
  name: "shared-auth-frame",
  action: function() {
    BlazeLayout.setRoot("body");
    BlazeLayout.render("emptyLayout",
      {
        content: "sharedAuthFrame"
      }
    )
  }
});

