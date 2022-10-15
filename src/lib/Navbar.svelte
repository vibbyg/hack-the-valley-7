<nav>
    <div id="spacer1"></div>
    <div id="currency">{currency}</div>
    <div id="title">{title}</div>
    <div id="spacer2"></div>
    <div id="gacha">Gacha</div>
    <!-- <ul>
        <li>
            <a>A</a>
        </li>
        <li>
            <a>B</a>
        </li>
        <li>
            <a>C</a>
        </li>
    </ul> -->
</nav>

<style>
    nav {
        display: flex;
        background-color: red;
    }

    #spacer1 {
        flex: 1;
    }

    #currency {
        background-color: blue;
        text-align: center;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
        flex: 2;
    }

    #title {
        text-align: center;
        margin: 10px 100px;
        padding: 10px;
        flex: 7;
    }

    #spacer2 {
        flex: 3;
    }

    #gacha {
        background-color: purple;
        text-align: center;
        position: absolute;
        width: 200px;
        height: 200px;
        line-height: 200px;
        border-radius: 100%;
        top: 20px;
        right: 20px;
    }

    /* nav > ul {
        flex: 5;
        display: flex;
        list-style-type: none;
        margin: 0 0 25px;
        padding: 0;
    }

    nav > ul > li {
        text-align: center;
        font-size: large;
    } */

    /* nav > ul a {
        color: white;
        text-decoration: none;
        display: block;
        padding: 10px;
        transition: background-color 0.5s, color 0.5s;
    } */
</style>

<script>
    let currency = 420;
    let title = 'Tit';
</script>
