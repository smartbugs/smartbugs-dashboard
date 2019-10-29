<template>
  <card>
    <span slot="header">Dataset</span>
    <h3 class="text-danger">Our dataset is categorized following DASP TOP10 Taxonomy</h3>
    <p
      class="card-text"
    >We mapped each vulnerability flagged by each tool to correspond to a DASP TOP10 category.</p>
    <p class="card-text">You can consult our mapping and even contribute.</p>
    <a
      class="nav-link"
      style="text-align:right"
      href="https://github.com/trailofbits/manticore"
    >DASP TOP 10</a>
    <br />

    <card>
      <h4 class="text-success" type="primary">1. Reentrancy</h4>
      <h4 class="text-success" type="primary">2. Access Control</h4>
      <h4 class="text-success" type="primary">3. Arithmetic</h4>
      <h4 class="text-success" type="primary">4. Unchecked Low Level Calls</h4>
      <h4 class="text-success" type="primary">5. Denial of Services</h4>
      <h4 class="text-success" type="primary">6. Bad Randomness</h4>
      <h4 class="text-success" type="primary">7. Front Running</h4>
      <h4 class="text-success" type="primary">8. Time Manipulation</h4>
      <h4 class="text-success" type="primary">9. Short Addresses</h4>
      <h4 class="text-success" type="primary">10. Unknown Unknowns / Other</h4>
    </card>
  </card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  }
};
</script>


