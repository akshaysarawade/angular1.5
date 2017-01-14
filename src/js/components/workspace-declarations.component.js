class WorkspaceDeclarationsCtrl {
  constructor($scope) {
    'ngInject';

    $scope.$emit('showHelpScreens');
  }
}

let WorkspaceDeclarations = {
  controller: WorkspaceDeclarationsCtrl,
  templateUrl: 'components/workspace-declarations.html'
};

export default WorkspaceDeclarations;
