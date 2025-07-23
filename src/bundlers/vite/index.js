import { transpileMD } from "../transpiler/index.js";
export default function VanMdx(){
    return {
      name: 'VanMdx',
      transform(src, id) {
        if (id.endsWith('.mdx')) {
          return {
            code: transpileMD(src),
            map: null,
          };
        }
      },
    };
  }
  