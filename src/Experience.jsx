import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import { useRef } from 'react';

export default function Experience()
{
    const planeRef = useRef();
    
    
    return <>

        <color args={ [ '#241a1a' ] } attach="background" />

        <Environment preset="city" />
        
        <PresentationControls
            global
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <mesh>
                <planeGeometry args={ [ 3.85, 2.5 ] } ref={ planeRef } />
                <meshBasicMaterial color='yellow' />
                <Html
                    transform
                    position={ [ 0,0, 0 ] }
                    distanceFactor={ 5 }
                    scale={ 0.3}
                >
                    <iframe src='https:carlostorres.dev' style={ { width: '1024px', height: '670px', opacity: 1 } }/>
                </Html>
            </mesh>
            
            
        </PresentationControls>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}