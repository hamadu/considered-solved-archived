var Problem = (function() {
  return {
    load: function() {
      var jsonStringOfProblems = localStorage.getItem('problems');
      if (jsonStringOfProblems == null) {
        return [];
      }
      var problems = JSON.parse(jsonStringOfProblems);
      for (var i = 0; i < problems.length; i++) {
        problems[i].editing = false;
        problems[i].showingThought = false;
      }
      return problems;
    },

    save: function(problems) {
      localStorage.setItem('problems', JSON.stringify(problems));
    },

    clear: function() {
      localStorage.remove('problems');
    },

    create: function() {
      return {
        name: '',
        editing: false,
        showingThought: false,
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
    }
  }
})();

module.exports = Problem;
