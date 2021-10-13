# table search

search in table rows

## Getting Started



### Prerequisites

jQuery library


### Installing
```
<script src='table_search.js'></script>
```

## Running the tests
```html
<input type="text" id="input" placeholder="enter text to search">
    <table id="table" border="2" >
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>mahmoud</td>
                <td>22</td>
            </tr>
            <tr>
                <td>2</td>
                <td>ahmed</td>
                <td>20</td>
            </tr>
            <tr>
                <td>3</td>
                <td>mostafa</td>
                <td>15</td>
            </tr>
            <tr>
                <td>4</td>
                <td>ali</td>
                <td>22</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>5</td>
                <td>khaled</td>
                <td>25</td>
            </tr>
            <tr>
                <td>6</td>
                <td>ali</td>
                <td>20</td>
            </tr>
        </tfoot>
    </table>
```
```javascript
$('#input').keyup(function () {
    select_search('input','select');
});
```

```javascript
$('#input').keyup(function () {
    table_search($('#input').val(),$('#table tbody tr,#table tfoot tr'),'012');
});
```

## Authors

* **Mahmoud Mohamed** - [github](https://github.com/mahmoud-mhamed)

Find me in [facebock](https://www.facebook.com/profile.php?id=100009734383434) who participated in this project.



