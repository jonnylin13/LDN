import Constants from "../shared/constants";
import ProgressState from "../shared/model/progressState";

// NOT PERSISTENT
class NetflixController {
  constructor() {
    console.log("<Info> Starting controller...");
    this._start();
    this._get_video().on("play", this.play);
    this._get_video().on("pause", this.pause);
    this.playerState = Constants.ControllerState.IDLE;
    this.progressState = new ProgressState();
    this.sync();
    console.log("<Info> Controller has been started!");
  }

  // ===============
  // Private Methods
  // ===============

  _start() {}

  _get_video() {
    return $("video");
  }

  _get_play() {
    return $(".button-nfplayerPlay")[0];
  }

  _get_player() {
    return $(".nf-player-container")[0];
  }

  _get_pause() {
    return $(".button-nfplayerPause")[0];
  }

  _get_scrubber() {
    return $(".scrubber-bar")[0];
  }

  // ==============
  // Public Methods
  // ==============

  play() {}

  pause() {}

  sync() {
    if (this._get_video()) {
      if (this._get_video().paused == true)
        this.playerState = Constants.ControllerState.PAUSE;
      else this.playerState = Constants.ControllerState.PLAY;
    } else this.playerState = Constants.ControllerState.IDLE;
    // TODO: Sync progress state
  }
}

const controller = new NetflixController();
