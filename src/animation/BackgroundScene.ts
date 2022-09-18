import { Scene, Engine, ArcRotateCamera, Vector3 } from "babylonjs";

export class BackgroundScene {
  readonly scene: Scene;
  readonly engine: Engine;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);
    this.scene = this.createScene();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  createScene(): Scene {
    const scene = new Scene(this.engine);

    const camera = new ArcRotateCamera(
      "ArcRotateCamera",
      -Math.PI / 2,
      Math.PI / 2.2,
      100,
      new Vector3(0, 0, 0),
      scene
    );
    camera.attachControl(this.canvas, true);
    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );

    const SPS = new BABYLON.SolidParticleSystem("SPS", scene);
    const sphere = BABYLON.MeshBuilder.CreateSphere("s", {});
    const poly = BABYLON.MeshBuilder.CreatePolyhedron("p", { type: 2 });
    SPS.addShape(poly, 1000); // 120 polyhedrons
    poly.dispose(); //dispose of original model poly

    const mesh = SPS.buildMesh(); // finally builds and displays the SPS mesh

    // initiate particles function
    SPS.initParticles = () => {
      for (let p = 0; p < SPS.nbParticles; p++) {
        const particle = SPS.particles[p];
        particle.position.x = BABYLON.Scalar.RandomRange(-200, 200);
        particle.position.y = BABYLON.Scalar.RandomRange(-200, 200);
        particle.position.z = BABYLON.Scalar.RandomRange(-200, 200);
      }
    };

    //Update SPS mesh
    SPS.initParticles();
    SPS.setParticles();

    return scene;
  }
}
