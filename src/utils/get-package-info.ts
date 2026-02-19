import type { PackageJson } from 'type-fest';
import * as pkgJson from '../../package.json';

export function getPackageInfo() {
  return pkgJson as PackageJson;
}
