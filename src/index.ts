// @thanks to: https://wohugb.gitbooks.io/javascript/content/htmlapi/fullscreen.html

class Fullscreen {
  static isFullscreen = false;
  static get isEnabled() {
    const doc = document as any;
    return (
      doc.fullscreenEnabled ||
      doc.mozFullScreenEnabled ||
      doc.webkitFullscreenEnabled ||
      doc.msFullscreenEnabled
    );
  }

  static request(inElement?: HTMLElement) {
    const { isFullscreen } = Fullscreen;
    if (isFullscreen) return;
    const element = inElement || (document.documentElement as any);
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullScreen();
    }
  }

  static exit() {
    const { isFullscreen } = Fullscreen;
    if (!isFullscreen) return;
    const doc = document as any;
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    }
  }

  static toggle(inElement?: HTMLElement) {
    const { isFullscreen } = Fullscreen;
    if (isFullscreen) {
      this.exit();
    } else {
      this.request(inElement);
    }
  }

  static to(inValue: boolean) {
    const { isFullscreen } = Fullscreen;
    if (inValue) {
      this.request();
    } else {
      this.exit();
    }
  }

  static on(inHandler: (e: any) => any) {
    document.addEventListener('fullscreenchange', inHandler);
    return {
      destory: () => {
        document.removeEventListener('fullscreenchange', inHandler);
      },
    };
  }
}

document.addEventListener('fullscreenchange', function () {
  Fullscreen.isFullscreen = !!document.fullscreenElement;
});

export default Fullscreen;
