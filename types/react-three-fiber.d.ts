import { extend } from '@react-three/fiber'
import { Group, Mesh, BufferGeometry, Material, Points } from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: import('@react-three/fiber').Object3DNode<Group, typeof Group>
      mesh: import('@react-three/fiber').Object3DNode<Mesh, typeof Mesh>
      bufferGeometry: import('@react-three/fiber').Object3DNode<BufferGeometry, typeof BufferGeometry>
      material: import('@react-three/fiber').Object3DNode<Material, typeof Material>
      points: import('@react-three/fiber').Object3DNode<Points, typeof Points>
    }
  }
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    group: import('@react-three/fiber').Object3DNode<Group, typeof Group>
    mesh: import('@react-three/fiber').Object3DNode<Mesh, typeof Mesh>
  }
}
