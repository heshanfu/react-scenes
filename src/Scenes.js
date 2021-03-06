import React, { Component } from "react";
import { Store } from "./helpers/store";
import slugify from "./helpers/slugify";

import Scene from "./Scene";
import Picker from "./Picker";

import {
  ScenesContainer,
  PickerWrapper,
  UIToggle,
  SceneWrapper
} from "./styled/scenes";

class Scenes extends Component {
  constructor(props) {
    super(props);

    const scenes = this.scenes();

    let storedConfig = Store.get("config") || {
      ...this.props.config,
      panel: {
        ...(this.props.config.panel || { position: "right" })
      },
      ui: this.props.config.ui == false ? false : true
    };

    this.state = {
      scene: Store.get("scene")
        ? Store.get("scene")
        : scenes.length
          ? this.scenes()[0]._id
          : null,
      size: 240,
      config: storedConfig,
      ready: false
    };

    this.setScene = this.setScene.bind(this);
    this.setConfig = this.setConfig.bind(this);
  }

  scenes() {
    let scenes = [];

    if (this.props.scenes) {
      scenes = this.props.scenes.slice().map((scene, idx) => {
        if (!scene._id) {
          scene._id = scene.title ? slugify(scene.title) : idx;
        }
        return scene;
      });
    }

    return scenes;
  }

  getScene(scene) {
    let s = this.scenes().find(({ _id }) => _id == scene);

    if (s) {
      return s;
    }

    return this.scenes()[0] || {};
  }

  setScene(scene) {
    // console.log(scene);
    this.setState({ scene });
    Store.set({ scene });
  }

  setConfig(conf) {
    let newConfig = { ...this.state.config, ...conf };
    this.setState({ config: newConfig });
    Store.set({ config: newConfig });
  }

  componentDidMount() {
    const config = Store.get("config");

    if (config) {
      this.setState({
        config
      });
    }

    this.setState({
      ready: true
    });
  }

  render() {
    const { title, frame, actions, panels, devices, theme } = this.props;
    const { size, ready, config } = this.state;
    const scenes = this.scenes();
    const scene = this.getScene(this.state.scene);
    const _id = `scene-${scene._id}`;

    if (!ready) return null;

    return (
      <ScenesContainer>
        <PickerWrapper size={size} ui={config.ui}>
          <Picker
            title={title}
            scenes={scenes}
            setScene={this.setScene}
            scene={scene}
            config={config}
            setConfig={this.setConfig}
            actions={actions}
            devices={devices}
          />
        </PickerWrapper>
        <SceneWrapper size={size} ui={config.ui} key={_id}>
          {scene && (
            <Scene
              key={_id}
              {...scene}
              _id={_id}
              theme={theme}
              config={config}
              scenes={scenes}
              setScene={this.setScene}
              setConfig={this.setConfig}
              frame={frame}
              panels={panels}
              devices={devices}
            />
          )}
        </SceneWrapper>

        {!config.ui && (
          <UIToggle onClick={() => this.setConfig({ ui: !config.ui })}>
            {config.ui ? "🕶" : "👓"}
          </UIToggle>
        )}
      </ScenesContainer>
    );
  }
}

export default Scenes;
