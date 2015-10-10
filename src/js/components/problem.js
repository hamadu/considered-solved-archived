var Problem = (function() {
  return {
    load: function() {
      var problems = localStorage.getItem('problems') || [];
      for (var i = 0; i < problems.length; i++) {
        problems[i].editing = false;
      }
      return problems;
    },

    save: function(problems) {
      localStorage.setItem('problems', problems);
    },

    create: function() {
      return {
        name: '',
        editing: false,
        url: '',
        thought: '',
        state: 'considered',
        date: Date.now()
      };
    },

    createWithEditMode: function () {
      var problem = this.create();
      problem.editing = true;
      return problem;
    },

    hoge: function() {
      return 'pya-!';
    }
  }
})();

module.exports = Problem;
