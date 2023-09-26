import { createDirectus } from '@directus/sdk';
import { rest } from '@directus/sdk/rest';

const directus = createDirectus('https://directus3.enso.dev').with(rest());

export default directus;