# python snippets


# Adding 5 days to a date in Python


import re
import datetime

datetime.datetime.strftime(datetime.datetime.now().date(), "%m/%d/%Y")

StartDate = "10/10/11"

date_1 = datetime.datetime.strptime(start_date, "%m/%d/%y")

end_date = date_1 + datetime.timedelta(days=10)

"%m/%d/%Y %H:%M:%S"

from datetime import datetime
date_string = '2009-11-29 03:17 PM'
format = '%Y-%m-%d %I:%M %p'
my_date = datetime.strptime(date_string, format)

# This prints '2009-11-29 03:17 PM'
print my_date.strftime(format)