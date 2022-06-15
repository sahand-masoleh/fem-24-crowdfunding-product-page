<script>
    // @ts-nocheck
    import '../styles/Nav.scss'
    import logo from '../assets/images/logo.svg'

    export let isOpen = false

    function handleClick(){
        isOpen = isOpen ? false : true
    }
    
    function close(){
        isOpen = false;
    }
</script>

<nav class="nav">
    <img src={logo} alt="crowfund logo" class="nav__logo">
    <button class="nav__hamburger" on:click={handleClick} data-open={isOpen}></button>
</nav>

{#if isOpen}
<div class="modal__bg" on:click={close}></div>
<div class="nav__modal modal" on:click={close}>
    <p class="nav__item">About</p>
    <hr class="nav__divider">
    <p class="nav__item">Discover</p>
    <hr class="nav__divider">
    <p class="nav__item">Get Started</p>
</div>
{/if}