    
    $(document).ready(function() {
      var datepicker = $('#datepicker').datepicker({
        format: 'M d - M d',
        todayHighlight: true
      }).on('changeDate', function(event) {
        var startDate = event.date;
        var endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 6);
  
        var formattedStartDate = formatDate(startDate);
        var formattedEndDate = formatDate(endDate);
        var dateRange = formattedStartDate + ' - ' + formattedEndDate;
        
        $('#datepicker').html(dateRange + ' <i class="fa-solid fa-solid fa-calendar"></i>');
      });
  
      $('#datepicker').click(function() {
        datepicker.datepicker('show');
      });
    });
  
    function formatDate(date) {
      var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var day = date.getDate();
      var monthIndex = date.getMonth();
      return monthNames[monthIndex] + ' ' + day;
    }
  