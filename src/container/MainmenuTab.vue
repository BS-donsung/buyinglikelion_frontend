<script lang="ts">
export default {
  name: 'UserWebCom',
}
</script>

<script setup lang="ts">

import { defineProps } from 'vue';
  
interface UserWebComProps {
  userprofile?: string,
  username: string,
  wishN: number,
  buyN: number,
};

const props = withDefaults(defineProps<UserWebComProps>(), {
  wishN : 0,
  buyN : 0,
  username: "",
  
});

</script>


<style scoped>
  .user-web_com {
    align-items: flex-start;
    display: flex;
    min-width: 320px;
    max-width: 320px;
  }

  .overlap-group {
    height: 260px;
    position: relative;
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rec_1 {
    background-color: rgba(165, 140, 109, 0.3);
    border-radius: 0px 0px 10px 10px;
    height: 160px;
    left: 0;
    position: absolute;
    top: 100px;
    width: 320px;
  }

  .rec_2 {
    background-color: rgba(165, 140, 109, 0.05);
    border-radius: 10px 10px 0px 0px;
    height: 100px;
    left: 0;
    position: absolute;
    top: 0;
    width: 320px;
  }

  .userprofile {
    height: 100px;
    object-fit: cover;
    
    position: absolute;
    top: 32px;
    width: 100px;
  }

  .username {
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 132px;
    font-size: 24px;
  }

  .wishitem {
    position: absolute;
    top: 192px;
    left: 52px;
    letter-spacing: 0;
    line-height: 22px;
    white-space: nowrap;
  }

  .wishN {
    left: 84px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    top: 220px;
    white-space: nowrap;
  }

  .buyN {
    right: 84px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    top: 220px;
    white-space: nowrap;
  }

  .buyitem {
    position: absolute;
    top: 192px;
    right: 52px;
    letter-spacing: 0;
    line-height: 22px;
    white-space: nowrap;
  }

  
</style>