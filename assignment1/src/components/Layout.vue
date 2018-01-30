<template>
    <div class="deskbooker-container container"> 
        <slot name="header"></slot>
        <div class="row">
            <div class="col-4">
                <slot name="sideMap"></slot>
            </div>
            <div class="col-sm-8">
                <div class="row">
                    <slot name="desksAvailable"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
deskbooker-container {
  margin: 0
}
</style>
