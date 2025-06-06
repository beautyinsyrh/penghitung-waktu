<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter</title>

    <style>
        .container{
            width: 50%;
            margin: auto;
        }

        .text-center{
            text-align: center;
        }

        h1#number{
            /* font-family: 'Courier New', Courier, monospace; */
            font-size: 150px;
            /* border: 1px solid red; */
        }

        button#count{
            background-color: green;
            text-transform: uppercase;
            color: white;
            padding: 10px;
            font-size: 50px;
            margin-bottom: 10px;
        }

        button#reset{
            background-color: red;
            text-transform: uppercase;
            color: white;
            padding: 10px;
            font-size: 50px;
        }

        .rounded-button{
            border-radius: 20px;
        }

    </style>

</head>
<body>
    <div class="container text-center">
        <h1 id="number">0</h1>
        <button id="count" class="rounded-button">Count</button>
        <button id="reset" class="rounded-button">Reset</button>
    </div>
<script>
        const number = document.getElementById("number");
        const countButton = document.getElementById("count");
        const resetButton = document.getElementById("reset");

        let count = 0;
        let intervalId;

        countButton.addEventListener("click", () => {

            intervalId = setInterval(() => {
                count++;
                number.textContent = count;
            }, 1000);
        });

        resetButton.addEventListener("click", () => {

            clearInterval(intervalId);

            count = 0;
            number.textContent = count;
        });
</script>
</body>
</html>
