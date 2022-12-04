function ToolbarExtension(viewer, options) {
      Autodesk.Viewing.Extension.call(this, viewer, options);
    }

    ToolbarExtension.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
    ToolbarExtension.prototype.constructor = ToolbarExtension;

    ToolbarExtension.prototype.load = function() {
      // Set background environment to "Infinity Pool"
      // and make sure the environment background texture is visible
    //   this.viewer.setLightPreset(6);
      window.VF = this.viewer;
      this.viewer.setEnvMapBackground(true);

      // Ensure the model is centered
    //   this.viewer.fitToView();

      return true;
    };

    ToolbarExtension.prototype.unload = function() {
      // nothing yet
    };

    Autodesk.Viewing.theExtensionManager.registerExtension('ToolbarExtension', ToolbarExtension);

    // detect toolbar

    ToolbarExtension.prototype.onToolbarCreated = function(toolbar) {

      alert('TODO: customize Viewer toolbar');
    };

    // add buttons

    ToolbarExtension.prototype.onToolbarCreated = function(toolbar) {
      // alert('TODO: customize Viewer toolbar');

      var viewer = this.viewer;

      // Button 1
      var button1 = new Autodesk.Viewing.UI.Button('show-env-bg-button');
      button1.onClick = function(e) {
          viewer.setEnvMapBackground(true);
      };
      button1.addClass('show-env-bg-button');
      button1.setToolTip('Show Environment');

      // Button 2
      var button2 = new Autodesk.Viewing.UI.Button('hide-env-bg-button');
      button2.onClick = function(e) {
          viewer.setEnvMapBackground(false);
      };
      button2.addClass('hide-env-bg-button');
      button2.setToolTip('Hide Environment');

      // Button 3
      var button3 = new Autodesk.Viewing.UI.Button('mat-button');
      button3.onClick = function(e) {

          viewer.setLightPreset(6);
          console.log('_______________VF');
      };
      button3.addClass('mat-button');
      button3.setToolTip('Change Material');

      // Button 4
      var button4 = new Autodesk.Viewing.UI.Button('mat2-button');
      button4.onClick = function(e) {

    //       const listOfMaterials = this.viewer.impl.matman()._materials;
    //       Object.keys( listOfMaterials ).map( materialName => {
    //           listOfMaterials[materialName].reflectivity = 0;
    //       };
      };
      button4.addClass('mat-button');
      button4.setToolTip('Change Reflections 0');

      // Button 5
      var button5 = new Autodesk.Viewing.UI.Button('mat3-button');
      button5.onClick = function(e) {

    //       const listOfMaterials = this.viewer.impl.matman()._materials;
    //       Object.keys( listOfMaterials ).map( materialName => {
    //           listOfMaterials[materialName].reflectivity = 1;
    //       };
      };
      button5.addClass('mat-button');
      button5.setToolTip('Change Reflections 1');





      // SubToolbar
      this.subToolbar = new Autodesk.Viewing.UI.ControlGroup('my-custom-toolbar');
      this.subToolbar.addControl(button1);
      this.subToolbar.addControl(button2);
      this.subToolbar.addControl(button3);
      this.subToolbar.addControl(button4);
      this.subToolbar.addControl(button5);

      toolbar.addControl(this.subToolbar);
    };


    // clean up

    ToolbarExtension.prototype.unload = function() {
      if (this.subToolbar) {
          this.viewer.toolbar.removeControl(this.subToolbar);
          this.subToolbar = null;
      }
    };


    // NOP_VIEWER.viewerSettingsPanel.options.loadExtension('ToolbarExtension');



    setTimeout(loadDef, 6000);
    setTimeout(loadEnd, 8000);

    function loadDef() {

    NOP_VIEWER.viewerSettingsPanel.options.loadExtension('ToolbarExtension');

    }
    function loadEnd(viewer) {
    //var viewer = this.viewer;
    //this.viewer.loadExtension('ToolbarExtension');
    //window.VF = this.viewer;
    }
