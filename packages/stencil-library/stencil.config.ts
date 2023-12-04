import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
    {
      type: 'www',
      serviceWorker: null,
    },
    reactOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
      includeImportCustomElements: true,
      customElementsDir: 'dist/components',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
