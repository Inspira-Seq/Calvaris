/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Layout } from "./components/layout/Layout";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";

export default function App() {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
}
