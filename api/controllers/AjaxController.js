/**
 * AjaxController
 *
 * @description :: Server-side logic for managing Ajaxes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    addSuite: function(req, res) {
        Program.find(req.body.programId, function(err, program) {
            program.suite.add(req.body.suiteId);
        });
    }
};


