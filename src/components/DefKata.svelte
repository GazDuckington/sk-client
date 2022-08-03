<script lang="ts">
    export let kata: string;
    let showDef = false;
</script>

<div class="">
    {#if showDef}
    <div class="card bg-blue-600 absolute bottom-12">this is def for {kata}</div>
    {/if}
    <p on:click={()=>showDef=!showDef}>{kata}</p>
</div>