Template.quiz3.helpers({
  groups(){return Groups.find()}
})

Template.quiz3.events({
  'click button#createGroup'(event,instance){
    event.preventDefault(); // this keeps the browser from reloading the page!
    var name = instance.$("#js-groupname").val();
    var description = instance.$("#js-description").val();

    var agree = instance.$('#js-agree').is(":checked");
    createdAt = new Date();
    owner = Meteor.userId();
    console.log(name);
    console.log(description);
    console.log(createdAt);
    console.log(owner);
    var entry = {name:name,description:description,createdAt:createdAt,owner:owner};
    console.dir(entry);
    if (agree)
       Groups.insert(entry);
    else {
         alert("you have to check the box!")
       }
  }
})


Template.grouprow.events({
  "click span"(event, instance){
    console.log('clicked on span elt');
    Groups.remove(this.group._id);
  }
})
