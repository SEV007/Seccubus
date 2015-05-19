import Annotations from 'anglue/annotations';

export class RunsPageComponent {
  static get annotation() {
    return Annotations.getComponent('runsPage', RunsPageComponent);
  }

  static get injections() {
    return {
      'scanActions': 'ScanActions',
      'runActions': 'RunActions',
      'runStore': 'RunStore',
      'scanStore': 'ScanStore',
      'stateParams': '$stateParams'
    };
  }

  get selectedWorkspaceId() {
    return this.stateParams.workspace_id;
  }

  /**
   * When this component activates we refresh the data
   */
  activate() {
    this.scanActions.loadScans(this.selectedWorkspaceId);
  }

  get scans() {
    return this.scanStore.items;
  }
}

export default RunsPageComponent;
