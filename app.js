 function dis(val) { document.getElementById("result").value += val }
        function clr() { document.getElementById("result").value = "" }
        function solve() {
            let x = document.getElementById("result").value
            let y = eval(x) // Note: eval() can be dangerous, better for small projects
            document.getElementById("result").value = y
        }