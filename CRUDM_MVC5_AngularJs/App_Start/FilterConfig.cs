using System.Web;
using System.Web.Mvc;

namespace CRUDM_MVC5_AngularJs
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
