const PIXI = require('pixi.js')
const loader = PIXI.loader
import manifest from "./asset_manifest.json"
const images = require.context('./assets/projects', true);


export default class AssetLoader {
    
    static load( progress ) {
        return new Promise(( resolve, reject )=> {
            
            let total = manifest.length, complete = 0
            
            var img_src
            manifest.forEach( f => {
                img_src = images(f)
                loader.add( img_src )
            })
            
            function onProgress( resource ) {
                complete += 1
                progress({progress: (complete / total)})
            }
            
            loader.on("progress", onProgress)
            loader.on("complete",resolve)
         
            loader.load()
        })
    }
}